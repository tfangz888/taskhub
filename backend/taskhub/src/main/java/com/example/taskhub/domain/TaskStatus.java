package com.example.taskhub.domain;

public enum TaskStatus {
    UNPUBLISHED("unpublished"),
    BIDDING("bidding"),
    BIDDING_CLOSED("bidding_closed"),
    ASSIGNED("assigned");

    private final String value;

    TaskStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
