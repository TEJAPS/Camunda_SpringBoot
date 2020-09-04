package com.dpoint.tutorial.mocdel;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CamundaCompatibleNativeJsonDemoRequestDto {

    CamundaValueTypePairDto attribute1;
    CamundaValueTypePairDto attribute2;
    CamundaValueTypePairDto attribute3;


    private <T extends Object> CamundaValueTypePairDto createValueTypePair(T value) {
        return new CamundaValueTypePairDto<T>(value);
    }

    public void setAttribute1(String attribute1) {
        this.attribute1 = createValueTypePair(attribute1);
    }

    public void setAttribute2(String attribute2) {
        this.attribute2 = createValueTypePair(attribute2);
    }

    public void setAttribute3(String attribute3) {
        this.attribute3 = createValueTypePair(attribute3);
    }


}
