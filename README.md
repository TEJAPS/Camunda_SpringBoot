# Camunda_SpringBoot

## For learning camunda watch out this playlist:


https://www.youtube.com/watch?v=neHvuyEPM8Q&list=PLLUFZCmqicc-ESKvg3XZE-7yX5o_0PPED
-----------------------------------------------------------------------------------

### For Email <br/>
Video Demonstation: https://www.youtube.com/watch?v=2BLKT0X1GJY <br/>
#### Prerequisites: For running any mail services <br/>

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
Video Demonstation: https://www.youtube.com/watch?v=rQmeHZdfdYk
Step1 : Add dependencies
<artifactId>camunda-bpm-process-test-coverage</artifactId>
<artifactId>camunda-bpm-assert</artifactId>
<artifactId>assertj-core</artifactId>
<artifactId>powermock-module-junit4</artifactId>
<artifactId>mockito-core</artifactId>

Step2 : In your test case file register the processEnging by creating object process Enging Rule Ex: public
ProcessEngineRule rule = new ProcessEngineRule();

That's it nothing more, happy testing... <br/>

-----------------------------------------------------------------------------------

### Steps for OpenApi/Swagger in Spring Boot Camunda


Step 1: Create a client <br/>
Step 2: Download jar from jfrog: https://camunda.jfrog.io/ui/native/camunda-bpm/org/camunda/bpm/camunda-engine-rest-openapi/ <br/>
Step 3: Extract the jar and add openapi json file to client resources folder <br/>
Step 4: Add open-api-generator-maven-plugin with require input directory path and other configurations <br/>
Step 5: Add dependencies required by openapi json, and test related libraries - refer pom.xml of camunda-client<br/>
Step 6: Do : mvn clean install, verify the code (api, model, auth, apiclient) is generated <br/>
Step 7: Define port and camunda engine base-url/rest or base-url/engine-rest in application.yml, will be utilised in Step 8<br/>
Step 8: Create configuration with Bean of api client, and require utility, example - CamundaClientConfiguration.java <br/>
Step 9: write required methods and in our use case we expose it in ProcessDefinitionUtilityController in the client <br/>
Step 10: Do clean install, then run the client application and the camunda engine<br/>
Step 11: Test the functionality by hitting /client/start api of client and verify the instance is created in camunda engine for testCaseSample workflow<br/>

-----------------------------------------------------------------------------------

### Steps to use camunda frontend

Step 1: Have your camunda engine running or start this camunda engine <br/>
Step 2: update the url of camunda engine in the .env.development if you are running your own camunda-engine, if you are starting camunda engine of this repo only then proceed with default content of configuration file<br/>
Step 3: go to custom camunda frontend and run commands: npm install && npm start<br/>
Since all are running now<br/>
Step 4: In Camunda Engine Application try starting any workflow<br/>
Step 5: Verify if content gets populated in the React application<br/>

-----------------------------------------------------------------------------------

### Front end Snippets alias front end readme.md

BPMN diagram reference 1: https://camunda.com/blog/2015/08/rendering-bpmn-and-highlight-current/<br/>
BPMN diagram reference 2: https://codesandbox.io/s/quizzical-lake-szfyo?file=/src/App.js<br/>
snippet: https://codesandbox.io/s/react-set-color-viewer-wdus0?file=/src/App.js:1010-1637<br/>
-----------------------------------------------------------------------------------