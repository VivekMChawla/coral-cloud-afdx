# DevTools Demo

This demo showcases the suite of Agentforce DX Pro-Code Developer Tools.

## Run Agent Tests
```bash
sf agent test run --api-name Guest_Experience_Agent_Test --wait 5
```

## Fetch Agent Test Results as JSON
```bash
sf agent test results --job-id xxxxxx --json
```

## Run Code Analyzer 5.0 Scan (Recommended Rules | HTML Output)
```bash
sf code-analyzer run --output-file=code-analysis.html
```

## Run Code Analyzer 5.0 Scan (Recommended Rules | Sev2 | Detail Output)
```bash
sf code-analyzer run --rule-selector Recommended:2 --view=detail
```
