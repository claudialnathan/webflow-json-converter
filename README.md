# webflow-json-converter

Script to convert standard JSON into paste-able Webflow JSON 💿

Required Data Attributes:

| Attribute        | Value     | Placement      |
| :--------------- | :-------- | :------------- |
| data-json-copy   | unique ID | On copy button |
| data-json-target | unique ID | On Textarea    |

Unique IDs on both the copy and target need to match. Current working example uses Wf custom element tagged Textarea.
