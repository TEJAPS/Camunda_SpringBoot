# Camunda_SpringBoot
-----------------------------------------------------------------------------------

## For learning camunda watch out this playlist:

https://www.youtube.com/watch?v=neHvuyEPM8Q&list=PLLUFZCmqicc-ESKvg3XZE-7yX5o_0PPED

-----------------------------------------------------------------------------------

### For Email

#### Prerequisites: For running any mail services

1. Turn off 2-factor authentication
2. Allow less secure option shoud be True
3. IMAP should be enabled

#### FYI:

1. https://support.google.com/accounts/answer/1064203?hl=en
2. https://github.com/camunda/camunda-bpm-mail

#### To verify whehter application will support sending mails or not, check for logs:

CNCT-01004 Discovered provider for connector id 'mail-send' CNCT-01004 Discovered provider for connector id 'mail-poll'
CNCT-01004 Discovered provider for connector id 'mail-delete'

-----------------------------------------------------------------------------------

### For Writing Test Cases

Step1 : Add dependencies
<artifactId>camunda-bpm-process-test-coverage</artifactId>
<artifactId>camunda-bpm-assert</artifactId>
<artifactId>assertj-core</artifactId>
<artifactId>powermock-module-junit4</artifactId>
<artifactId>mockito-core</artifactId>

Step2 : In your test case file register the processEnging by creating object process Enging Rule Ex: public
ProcessEngineRule rule = new ProcessEngineRule();

That's it nothing more, happy testing...

-----------------------------------------------------------------------------------
TODO:
1. Claim and other things from runtime
2. Get and Post request --done
3. synchronous and asynchronous --done
4. dmn types(first, unique, collect) and example -- done
5. api intro and usage -- done
   api doc links: https://docs.camunda.org/manual/7.16/reference/rest/ 
6. embedded forms --done
7. listeners -- done
8. constraints -- done
9. gateways -- exclusive, inclusive, parallel,event based gateway(https://docs.camunda.org/manual/7.15/reference/bpmn20/gateways/event-based-gateway/) -- done
10. DMN inheritance calls -- done
11. dmn in bpmn -- done
12. bpmn in bpmn -- done
13. Exception handling - all files of 7.12 handling boundary, and signal, escalation, throw object -- done
14. subprocess -- in one of the handling thing... done
15. spin-json-etc:
   transient variables: https://docs.camunda.org/manual/latest/user-guide/process-engine/variables/#transient-variables
    https://docs.camunda.org/manual/latest/user-guide/data-formats/json/#native-json-variable-value
    https://docs.camunda.org/manual/7.5/user-guide/process-engine/variables/
    https://docs.camunda.org/manual/7.5/user-guide/data-formats/#json-native-json-variable-value
    https://docs.camunda.org/manual/7.5/user-guide/data-formats/json/
    SpinValue.jsonValue(json).create - converts the json string into jackson object which latter needs to be unwrapped to access sub parameters
16. add plugins to modeller
17. dynamic config - read configuration
18. All about sub process example
19. for loop, parallel loop
20. external task - 
    doc: https://docs.camunda.org/manual/7.15/user-guide/process-engine/external-tasks/
    external task api: https://docs.camunda.org/manual/7.16/reference/rest/external-task/get-query/
21. How to test - In progress
22. Complete a process using postman end to end - 
23. complete a process using java end to end - 
24. Element templates:
    Example: https://github.com/camunda/camunda-modeler/tree/master/docs/element-templates
    Element template documentation: https://camunda.com/blog/2016/05/camunda-modeler-element-templates/
    
25. Presentation
    
save json as string = JSON.Stringify(obj) - to convert json to string
read json again from strin - S(stringjson)
