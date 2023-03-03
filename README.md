# Camunda_SpringBoot
-----------------------------------------------------------------------------------
##For learning camunda watch out this playlist:
https://www.youtube.com/watch?v=neHvuyEPM8Q&list=PLLUFZCmqicc-ESKvg3XZE-7yX5o_0PPED

-----------------------------------------------------------------------------------

###For Email

####Prerequisites: For running any mail services

(Option - 1 - Probably will not work)
1. Turn off 2-factor authentication
2. Allow less secure option shoud be True
3. IMAP should be enabled

(Option - 2 -Google has discontinued usage of enabling/disabling less secure option. So to integrate 3rd party app and to allow sending mails use below mechanism to authenticate)
1. Turn on 2-factor authentication.
2. Generate App password. (This password is different than the Gmail account password).
3. Use this App password in your camunda spring-boot mailing-config properties.
(Refer link for generating App password : https://www.youtube.com/watch?v=hXiPshHn9Pw)


####FYI:
1. https://support.google.com/accounts/answer/1064203?hl=en
2. https://github.com/camunda/camunda-bpm-mail


####To verify whehter application will support sending mails or not, check for logs:
CNCT-01004 Discovered provider for connector id 'mail-send'
CNCT-01004 Discovered provider for connector id 'mail-poll'
CNCT-01004 Discovered provider for connector id 'mail-delete'

-----------------------------------------------------------------------------------

###For Writing Test Cases

Step1 : Add dependencies
    <artifactId>camunda-bpm-process-test-coverage</artifactId>
    <artifactId>camunda-bpm-assert</artifactId>
    <artifactId>assertj-core</artifactId>
    <artifactId>powermock-module-junit4</artifactId>
    <artifactId>mockito-core</artifactId>

Step2 : In your test case file register the processEnging by creating object process Enging Rule
 Ex: public ProcessEngineRule rule = new ProcessEngineRule();
 
 That's it nothing more, happy testing...

-----------------------------------------------------------------------------------
