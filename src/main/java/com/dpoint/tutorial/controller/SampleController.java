package com.dpoint.tutorial.controller;

import camundajar.impl.com.google.gson.Gson;
import com.dpoint.tutorial.delegates.CompleteProcessFromJava;
import com.dpoint.tutorial.dto.TestCaseSampleDto;
import com.dpoint.tutorial.model.NativeJsonDemoRequestDto;
import com.dpoint.tutorial.model.Person;
import com.dpoint.tutorial.model.Summers;
import com.dpoint.tutorial.service.CamundaStartService;
import com.dpoint.tutorial.service.FormatCamundaRequestsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.camunda.bpm.engine.ProcessEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SampleController {

    @Autowired
    CamundaStartService camundaStartService;

    @Autowired
    CompleteProcessFromJava completeProcessFromJava;

    @Autowired
    FormatCamundaRequestsService camundaRequestsService;

    @Autowired
    ProcessEngine processEngine;

    @RequestMapping("/get")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping(value = "/testcasesampleflow", method = RequestMethod.POST)
    public void testcaseSample(@RequestBody TestCaseSampleDto obj) throws Exception {
        completeProcessFromJava.completeTestCaseSampleFlow(obj);
    }

    @RequestMapping(value = "/msgeventstart", method = RequestMethod.POST)
    public void persistPerson(@RequestBody Person obj) throws Exception {
        camundaStartService.startProcessByMessage2(obj);
    }

//    @RequestMapping(value = "/msgs2", method = RequestMethod.POST)
//    public void msgs2(@RequestBody String name) {
//        camundaStartService.startProcessByMessage2(name);
//    }

    @RequestMapping(value = "/getconnector/{name}", method = RequestMethod.GET)
    public int getConnector(@PathVariable String name) {
        return name.length();
    }

    @RequestMapping(value = "/postconnector", method = RequestMethod.POST)
    public int msgs2(@RequestBody Summers summers) {
        return summers.getNum1() + summers.getNum2() + summers.getNum3() + summers.getNum4();
    }

    @RequestMapping(method = RequestMethod.POST, path = "/demonativejson")
    public void demoNativeJson(@RequestBody NativeJsonDemoRequestDto nativeJsonDemoRequestDto) {
        camundaRequestsService.callNativeJsonDemoSample(nativeJsonDemoRequestDto);
    }

    @GetMapping("/tasks")
    public String getTask() throws JsonProcessingException {
        Gson gson = new Gson();
        return gson.toJson(processEngine.getTaskService().createTaskQuery().active().list());
    }
}
