package com.dpoint.tutorial.mocdel;


public class Person {
    public Person(String name, String gender) {
        this.name = name;
        this.gender = gender;
    }

    public Person() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    String name;
    String gender;
}
