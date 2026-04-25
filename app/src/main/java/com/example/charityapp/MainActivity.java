package com.example.charityapp;

import android.app.AlertDialog;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity implements CampaignAdapter.OnItemClickListener {

    private static final String CHANNEL_ID = "charity_notifications";
    private static final String KEY_CAMPAIGNS = "campaigns_list";
    
    private RecyclerView recyclerView;
    private CampaignAdapter adapter;
    private ArrayList<Campaign> campaigns;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        if (savedInstanceState != null) {
            campaigns = savedInstanceState.getParcelableArrayList(KEY_CAMPAIGNS);
        } else {
            campaigns = new ArrayList<>();
            campaigns.add(new Campaign("Clean Water Initiative", 5000, 1200));
            campaigns.add(new Campaign("Education for All", 3000, 2500));
            campaigns.add(new Campaign("Save the Forests", 10000, 4500));
            campaigns.add(new Campaign("Emergency Relief Fund", 2000, 1800));
        }

        adapter = new CampaignAdapter(campaigns, this);
        recyclerView.setAdapter(adapter);

        createNotificationChannel();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.action_donate) {
            Toast.makeText(this, "Select a campaign to donate", Toast.LENGTH_SHORT).show();
            return true;
        } else if (id == R.id.action_contributions) {
            Toast.makeText(this, "My Contributions clicked", Toast.LENGTH_SHORT).show();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onItemClick(Campaign campaign, int position) {
        showDonationDialog(campaign, position);
    }

    private void showDonationDialog(Campaign campaign, int position) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Donate to " + campaign.getName());

        final EditText input = new EditText(this);
        input.setInputType(InputType.TYPE_CLASS_NUMBER | InputType.TYPE_NUMBER_FLAG_DECIMAL);
        input.setHint("Enter amount");
        builder.setView(input);

        builder.setPositiveButton("Confirm", (dialog, which) -> {
            String amountStr = input.getText().toString();
            if (!amountStr.isEmpty()) {
                double amount = Double.parseDouble(amountStr);
                processDonation(campaign, position, amount);
            }
        });
        builder.setNegativeButton("Cancel", (dialog, which) -> dialog.cancel());

        builder.show();
    }

    private void processDonation(Campaign campaign, int position, double amount) {
        double oldRaised = campaign.getRaised();
        campaign.addRaised(amount);
        adapter.notifyItemChanged(position);

        Toast.makeText(this, "Donated $" + amount + " to " + campaign.getName(), Toast.LENGTH_SHORT).show();

        if (! (oldRaised >= campaign.getGoal()) && campaign.isGoalReached()) {
            sendGoalReachedNotification(campaign);
        }
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_VERSION_CODES.O) {
            CharSequence name = "Charity Notifications";
            String description = "Notifications for charity campaign goals";
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);
            channel.setDescription(description);
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    private void sendGoalReachedNotification(Campaign campaign) {
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(android.R.drawable.ic_dialog_info)
                .setContentTitle("Goal Reached!")
                .setContentText("The campaign '" + campaign.getName() + "' has reached its goal!")
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setAutoCancel(true);

        NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify((int) System.currentTimeMillis(), builder.build());
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putParcelableArrayList(KEY_CAMPAIGNS, campaigns);
    }
}
