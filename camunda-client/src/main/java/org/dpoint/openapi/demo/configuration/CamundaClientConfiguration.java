package org.dpoint.openapi.demo.configuration;

import org.openapitools.client.ApiClient;
import org.openapitools.client.api.ProcessDefinitionApi;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class CamundaClientConfiguration {
    @Value("${camunda.uri}")
    private String camundaBaseUri;

    @Bean("apiClient")
    public ApiClient apiClient() {
        return new ApiClient().setBasePath(camundaBaseUri);
    }

    @Bean
    public ProcessDefinitionApi processDefinitionApi(@Qualifier("apiClient") ApiClient apiClient) {
        return new ProcessDefinitionApi(apiClient);

    }
}

