package com.dpoint.tutorial.delegates;

import com.dpoint.tutorial.dto.TestCaseSampleDto;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class CompleteProcessFromJava {

    @Autowired
    RuntimeService runtimeService;
    String processDefinitionName = "testCaseSample";
    String processInstanceId;
    String taskInstanceId;
    @Autowired
    private TaskService taskService;

    public void completeTestCaseSampleFlow(TestCaseSampleDto testCaseSampleDto) {
        startTestCaseSampleFlow(testCaseSampleDto.getAttribute1(), testCaseSampleDto.getAssignPerson(), testCaseSampleDto.getBusinessKey());
        getCurrentTaskId();
        getCurrentTaskId();
        completeTask(taskInstanceId);
        getCurrentTaskId();
//        completeTask(taskInstanceId);
    }

    public void startTestCaseSampleFlow(String attribute1, String assignPerson, String businessKey) {
        HashMap<String, Object> variables = new HashMap<>();
        variables.put("attribute1", attribute1);
        variables.put("assignPerson", assignPerson);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(processDefinitionName, businessKey, variables);
        processInstanceId = processInstance.getProcessInstanceId();
    }

    public void getCurrentTaskId() {
        List<Task> taskList = taskService.createTaskQuery().processInstanceId(processInstanceId).orderByTaskCreateTime().desc().list();
        taskInstanceId = taskList.get(0).getId();
//        .processDefinitionKey("processDefinitionName").active().orderByTaskCreateTime();
//        taskService.createTaskQuery().
    }

    public void completeTask(String taskInstanceId) {
        taskService.complete(taskInstanceId);
    }
}
