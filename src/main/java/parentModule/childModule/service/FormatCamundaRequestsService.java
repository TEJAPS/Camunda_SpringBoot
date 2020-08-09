package parentModule.childModule.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import parentModule.childModule.mocdel.CamundaCompatibleNativeJsonDemoRequestDto;
import parentModule.childModule.mocdel.CamundaCustomVariables;
import parentModule.childModule.mocdel.NativeJsonDemoRequestDto;

@Service
public class FormatCamundaRequestsService {

    public void callNativeJsonDemoSample(NativeJsonDemoRequestDto nativeJsonDemoRequestDto){
        try{
            CamundaCompatibleNativeJsonDemoRequestDto camundaCompatibleNativeJsonDemoRequestDto =
                    new CamundaCompatibleNativeJsonDemoRequestDto();
            camundaCompatibleNativeJsonDemoRequestDto.setAttribute1(nativeJsonDemoRequestDto.getAttribute1());
            camundaCompatibleNativeJsonDemoRequestDto.setAttribute2(nativeJsonDemoRequestDto.getAttribute2());
            camundaCompatibleNativeJsonDemoRequestDto.setAttribute3(nativeJsonDemoRequestDto.getAttribute3());

            CamundaCustomVariables camundaCustomVariables =
                    new CamundaCustomVariables(camundaCompatibleNativeJsonDemoRequestDto);

            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add("Content-Type","application/json");

            HttpEntity<CamundaCustomVariables> httpEntity = new HttpEntity<>(camundaCustomVariables, httpHeaders);
            ResponseEntity<String> responseEntity = restTemplate.postForEntity("http://localhost:8086/rest/process-definition/key/NativeJsonDemo/tenant-id/dpoint/start",
                    httpEntity, String.class);
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}
