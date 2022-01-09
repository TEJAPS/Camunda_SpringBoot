package org.dpoint.openapi.demo.controller;


import lombok.extern.slf4j.Slf4j;
import org.openapitools.client.api.ProcessDefinitionApi;
import org.openapitools.client.model.ProcessInstanceWithVariablesDto;
import org.openapitools.client.model.StartProcessInstanceDto;
import org.openapitools.client.model.VariableValueDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/client")
public class ProcessDefinitionUtilityController {

    @Autowired
    ProcessDefinitionApi processDefinitionApi;

    @GetMapping("/")
    public String asd() {
        return "hi";
    }

    @GetMapping("/start")
    public ProcessInstanceWithVariablesDto something() throws Exception {

        try {
            VariableValueDto variable1 = new VariableValueDto();
            variable1.setValue("str");

            StartProcessInstanceDto startProcessInstanceDto = new StartProcessInstanceDto();

            return processDefinitionApi.startProcessInstanceByKey("testCaseSample",
                    startProcessInstanceDto).putVariablesItem("variable1", variable1);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return null;

    }
}
