# Camunda_SpringBoot
Camunda_SpringBoot

###For Email
####Prerequisites: For running any mail services
1. Turn off 2-factor authentication
2. Allow less secure option shoud be True
3. IMAP should be enabled


####FYI:
1. https://support.google.com/accounts/answer/1064203?hl=en
2. https://github.com/camunda/camunda-bpm-mail


####To verify whehter application will support sending mails or not, check for logs:
CNCT-01004 Discovered provider for connector id 'mail-send'
CNCT-01004 Discovered provider for connector id 'mail-poll'
CNCT-01004 Discovered provider for connector id 'mail-delete'