package parentModule.childModule.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import parentModule.childModule.mocdel.NativeJsonDemoRequestDto;
import parentModule.childModule.mocdel.Person;
import parentModule.childModule.mocdel.Summers;
import parentModule.childModule.service.CamundaStartService;
import parentModule.childModule.service.FormatCamundaRequestsService;

@RestController
public class SampleController {

    @Autowired
    CamundaStartService camundaStartService;

    @Autowired
    FormatCamundaRequestsService camundaRequestsService;

    @RequestMapping("/get")
    public String index() {
        return "Greetings from Spring Boot!";
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
    public void demoNativeJson(@RequestBody NativeJsonDemoRequestDto nativeJsonDemoRequestDto){
        camundaRequestsService.callNativeJsonDemoSample(nativeJsonDemoRequestDto);
    }
}
