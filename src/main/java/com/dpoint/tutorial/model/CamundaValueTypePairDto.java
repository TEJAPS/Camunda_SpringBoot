package com.dpoint.tutorial.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CamundaValueTypePairDto<T extends Object> {
    T value;
    String type;


    public CamundaValueTypePairDto(T value) {
        this.value = value;
        this.type = value.getClass().getSimpleName();
    }
}
