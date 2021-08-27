package com.dpoint.tutorial.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CamundaCustomVariables<T extends Object> {
    T variables;

    public CamundaCustomVariables(T variables) {
        this.variables = variables;
    }
}
