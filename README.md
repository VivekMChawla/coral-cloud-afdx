# DevTools Demo

This demo showcases the suite of Agentforce DX Pro-Code Developer Tools.

## Run Agent Tests
```bash
sf agent test run --api-name Guest_Experience_Agent_Test --wait 5
```

## Run Code Analyzer 5.0 Scan (All Rules)
```bash
sf code-analyzer run --output-file=code-analysis.html
```

## Run Code Analyzer 5.0 Scan (Custom Rules)
```bash
sf code-analyzer run --severity-threshold 3 --view=detail
```
