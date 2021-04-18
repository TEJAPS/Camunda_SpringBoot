package com.dpoint.tutorial.delegates;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MsgsampleService1 implements JavaDelegate {

    Logger LOGGER = LoggerFactory.getLogger(MsgsampleService1.class);

    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        LOGGER.info("executed msgsample service 1 ");
        delegateExecution.getProcessEngine().getIdentityService().getUserInfoKeys("abcd").isEmpty();
        delegateExecution.setVariable("servicevar", "servicevalue");
    }
}
