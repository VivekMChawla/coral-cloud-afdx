# DevTools Demo

This demo showcases the suite of Salesforce Pro-Code Developer Tools.

## Prepare the Code Builder Demo Environment

```bash
curl https://raw.githubusercontent.com/vivekmchawla/df24-devtools-demo/main/setup-df24-devtools-demo | bash
```

## Run Code Analyzer 5.0 Scan (All Rules)
```bash
sf code-analyzer run --rule-selector=all --output-file=code-analysis.html
```

## Run Code Analyzer 5.0 Scan (Custom Rules)
```bash
sf code-analyzer run --rule-selector=custom --view=detail
```
