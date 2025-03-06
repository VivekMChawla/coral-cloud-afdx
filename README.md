# DevTools Demo

This demo showcases the suite of Agentforce DX Pro-Code Developer Tools.

## Recreate the Agent Test
```bash
sf agent test create --test-api-name Guest_Experience_Agent_Test
```

## Run the Agent Test
```bash
sf agent test run --api-name Guest_Experience_Agent_Test --wait 5
```

## Run Code Analyzer 5.0 Scan (Recommended Rules | HTML Output)
```bash
sf code-analyzer run --output-file=code-analysis.html
```

## Run Code Analyzer 5.0 Scan (Recommended Rules | Sev2 | Detail Output)
```bash
sf code-analyzer run --rule-selector Recommended:2 --view=detail
```

# Other Useful Commands

## Create an Agent Spec from an Agent Spec
```bash
sf agent generate agent-spec --spec ExistingAgentSpec
```

## Fetch Agent Test Results
```bash
sf agent test results --job-id xxxxxx --json
```

# Demo Management Commands

## Reset the Demo
```bash
./demo/reset
```