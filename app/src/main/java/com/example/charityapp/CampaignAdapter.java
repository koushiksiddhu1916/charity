package com.example.charityapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;

public class CampaignAdapter extends RecyclerView.Adapter<CampaignAdapter.CampaignViewHolder> {

    private List<Campaign> campaigns;
    private OnItemClickListener listener;

    public interface OnItemClickListener {
        void onItemClick(Campaign campaign, int position);
    }

    public CampaignAdapter(List<Campaign> campaigns, OnItemClickListener listener) {
        this.campaigns = campaigns;
        this.listener = listener;
    }

    @NonNull
    @Override
    public CampaignViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_campaign, parent, false);
        return new CampaignViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull CampaignViewHolder holder, int position) {
        Campaign campaign = campaigns.get(position);
        holder.tvName.setText(campaign.getName());
        holder.tvGoal.setText(String.format("Goal: $%.2f", campaign.getGoal()));
        holder.tvRaised.setText(String.format("Raised: $%.2f", campaign.getRaised()));
        
        int progress = (int) ((campaign.getRaised() / campaign.getGoal()) * 100);
        holder.progressBar.setProgress(Math.min(progress, 100));

        holder.itemView.setOnClickListener(v -> {
            if (listener != null) {
                listener.onItemClick(campaign, position);
            }
        });
    }

    @Override
    public int getItemCount() {
        return campaigns.size();
    }

    public static class CampaignViewHolder extends RecyclerView.ViewHolder {
        TextView tvName, tvGoal, tvRaised;
        ProgressBar progressBar;

        public CampaignViewHolder(@NonNull View itemView) {
            super(itemView);
            tvName = itemView.findViewById(R.id.tvCampaignName);
            tvGoal = itemView.findViewById(R.id.tvGoal);
            tvRaised = itemView.findViewById(R.id.tvRaised);
            progressBar = itemView.findViewById(R.id.progressBar);
        }
    }
}
