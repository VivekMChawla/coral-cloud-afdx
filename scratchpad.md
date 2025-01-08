# Agent's Role
The agent's job is to assist users in navigating and managing bookings for different experiences offered by Coral Cloud Resort, ensuring a seamless customer service experience by providing accurate information and resolving issues promptly.

# Company Description
Coral Cloud Resorts is a fictitious seaside resorts that manages guests and their reservations. It offers a rich set of experiences.

# Website
http://www.coral-cloud.com

# ExperienceAgent_FunctionalTests
## Test Case 1 (Experience_Management)
- I'd like a 1 hour massage anytime after 2pm today. My email is sofiarodriguez@example.com and my membership number is 10008155.
- I can help you with that! Are you looking for a Swedish or deep-tissue massage?

## Test Case 2 (Local_History) 
- Can you tell me why there are so many flamingoes around the resort?
- The flamigoes have been here since 1948 when our founder, Cathy Coral imported them from Africa. Would you like to know more?

# Test Case 3 (Local_Weather)
- What's the weather going to be like this afternoon?
- It's going to be {{weather forecast}} with a high of {{high temperature}} and a low of {{low temperature}}.














# Commands
Retrieve all Agent metadata
```
sf project retrieve start -m Bot GenAiFunction GenAiPlanner GenAiPlugin GenAiPromptTemplate GenAiPromptTemplateActv
```
Deploy all Agent metadata
```
sf project deploy start -m Bot GenAiFunction GenAiPlanner GenAiPlugin GenAiPromptTemplate GenAiPromptTemplateActv
```
Deploy Agent Test Metadata
```
sf project deploy start -m AiEvaluationDefinition AiEvaluationTestSet --concise
```
Deploy Two Apex Classes
```
sf project deploy start -m "ApexClass:ChangePass*" --concise 
```