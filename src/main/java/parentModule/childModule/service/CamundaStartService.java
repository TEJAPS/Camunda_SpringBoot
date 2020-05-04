package parentModule.childModule.service;

import org.camunda.bpm.engine.RuntimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import parentModule.childModule.mocdel.Person;

@Service
public class CamundaStartService {
    @Autowired
    RuntimeService runtimeService;

    public void startProcessByMessage(Person person) {
        runtimeService.createMessageCorrelation("msg-s-1")
                .setVariable("springname", person.getName())
                .setVariable("gender", person.getGender())
                .correlate();
    }

    public void startProcessByMessage2(String name) {
        runtimeService.createMessageCorrelation("msg-s-2")
                .setVariable("name", name)
                .correlate();
    }


}
