package parentModule.childModule.delegates;

import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConnectorUtask2TaskListener implements ExecutionListener {
    @Autowired
    RuntimeService runtimeService;


    @Override
    public void notify(DelegateExecution delegateTask) throws Exception {
        String objectValue = delegateTask.getVariableTyped("customSerialized").toString();
        delegateTask.setVariable("deserialized", objectValue);
    }
}
