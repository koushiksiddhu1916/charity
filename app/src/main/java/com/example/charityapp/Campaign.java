package com.example.charityapp;

import android.os.Parcel;
import android.os.Parcelable;

public class Campaign implements Parcelable {
    private String name;
    private double goal;
    private double raised;

    public Campaign(String name, double goal, double raised) {
        this.name = name;
        this.goal = goal;
        this.raised = raised;
    }

    protected Campaign(Parcel in) {
        name = in.readString();
        goal = in.readDouble();
        raised = in.readDouble();
    }

    public static final Creator<Campaign> CREATOR = new Creator<Campaign>() {
        @Override
        public Campaign createFromParcel(Parcel in) {
            return new Campaign(in);
        }

        @Override
        public Campaign[] newArray(int size) {
            return new Campaign[size];
        }
    };

    public String getName() { return name; }
    public double getGoal() { return goal; }
    public double getRaised() { return raised; }

    public void addRaised(double amount) {
        this.raised += amount;
    }

    public boolean isGoalReached() {
        return raised >= goal;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(name);
        dest.writeDouble(goal);
        dest.writeDouble(raised);
    }
}
