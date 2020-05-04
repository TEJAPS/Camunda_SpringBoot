package parentModule.childModule;

import java.util.Random;

class Node {
    private Node next;
    private int datum;

    public Node(int datum) {
        this.datum = datum;
    }

    public Node(int datum, Node next) {
        this.datum = datum;
        this.next = next;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public int getDatum() {
        return datum;
    }

    public void setDatum(int datum) {
        this.datum = datum;
    }
}

//    And the following Linked List superclass:

public class LinkedList {
    protected Node first;
    Node second;

    public int get() {
        int out = Integer.MIN_VALUE;
        if (first != null) {
            out = first.getDatum();
            first = first.getNext();
        }
        return out;
    }

    public void add(int value) {
        // legitimately empty

        if (first == null) {
            first = new Node(value);
        } else {
            first = first.getNext();
            add(value);
        }
    }
}

class RandomeLinkedList extends LinkedList {
    protected Node first;
    Node second;

    public int get() {
        int out = Integer.MIN_VALUE;
        if (first != null) {
            out = first.getDatum();
            first = first.getNext();
        }
        return out;
    }

    public void add(int value) {
        // legitimately empty

        if (first == null) {
            first = new Node(value);
        } else {

            Random object = new Random();
            int number = object.nextInt(100);
            if (number % 2 == 0) {
                first = first.getNext();
                add(value);
            } else {
                Node next = new Node(value);
                Node second;
                second = first.getNext();
                first.setNext(next);
                next.setNext(second);
            }
        }
    }
}