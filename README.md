# AFDX Pro-Code Breakout Demo

This demo showcases the suite of Agentforce DX Pro-Code Developer Tools.

## Create Agent Test from Spec
```bash
sf agent test create --test-api-name Guest_Experience_Agent_Test
```

## Run Agent Tests
```bash
sf agent test run --api-name Guest_Experience_Agent_Test --wait 5
```

## Generate Test Spec from Agent Test
```
sf agent generate test-spec \
--from-definition force-app/main/default/aiEvaluationDefinitions/GE_Agent_Test_Rebecca.aiEvaluationDefinition-meta.xml \
--output-file specs/GE_Agent_Test_Rebecca-testSpec.yaml
```


# Other Useful Commands

## Fetch Agent Test Results
```bash
sf agent test results --job-id xxxxxx --json
```

## Create an Agent Spec from an Agent Spec
```bash
sf agent generate agent-spec --spec Resort_Manager-partialSpec.yaml
```
