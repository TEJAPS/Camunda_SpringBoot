package com.dpoint.tutorial;

import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.camunda.bpm.engine.test.ProcessEngineRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import static org.camunda.bpm.engine.test.assertions.ProcessEngineTests.*;

@RunWith(MockitoJUnitRunner.class)
public class TestCaseSample {
    private static final String PROCESS_KEY = "testCaseSample";

    @Rule
    public ProcessEngineRule rule = new ProcessEngineRule();

    @Test
    @Deployment(resources = {"7.12-bpmn-dmn-files/testCaseSample.bpmn"})
    public void testSampleCase_happyPath() {

        ProcessInstance instance = runtimeService().startProcessInstanceByKey(PROCESS_KEY);

        assertThat(instance)
                .isActive()
                .hasPassed("startEvent")
                .isWaitingAtExactly("userTask1")
                .task().isNotAssigned();

        complete(task(), withVariables(
                "assignPerson", "dpoint",
                "attribute1", "value1"
        ));

        assertThat(instance)
                .hasPassed("userTask1")
                .hasPassedInOrder("userTask1", "serviceTask1")
                .isWaitingAt("userTask2")
                .task().isAssignedTo("dpoint");

        complete(task(), withVariables("attributeService", "variableServicevalue"));
        assertThat(instance)
                .hasPassedInOrder("userTask2", "endEvent")
                .isEnded();

    }
}
