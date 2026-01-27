
## MVC (Model-View-Controller)
MVC is a software design pattern that separates an interactive applications into Model (data), View (UI), and Controller (logic) to improve modularity, maintainability, and scalability.

![](../static/Model-View-Controller-Architecture.png)
It was originally introduced by *Trygve Reenskaug* while working at *Xerox PARC Smalltalk* in the late 1970s.

::: info Core idea
Separate what the application stores (data), how it is presented (UI),
and how user requests are handled (control flow).
MVC enforces this separation of concerns:

- UI changes shouldn’t break business logic
- database changes shouldn’t directly affect UI
- Business logic should not be mixed with HTML templates
:::

:::tabs

== Model
**What application knows (data and rules)**
- Stores Core data for the application and the validation constraints on data 
- Ex: `price >= 0 in Product Table, ID is unique in User Table`
- Searching & manipulation on databases. 
- Interacts with databases, files, or external APIs

== View
**What user sees (presentation)**
- User-interface of application
- Defines how information (received from Controller/Model) is presented (not how it is stored/processed)
- Ex: `HTML pages, server-side templates, Forms, rendered Charts`

== Controller
**What the app does? What should happen on user request?**
- “Business logic” - how to manipulate data
- Handles user actions by coordinating between *Model* and *View*<br>
Examples:
	- Deciding which dashboard to show after login
	- Handling button clicks or form submissions
	- Validating input and triggering model updates
:::

User uses <span style="font-weight:bold; color:rgb(240, 96, 118)"> Controller </span> → updates the <span style="font-weight:bold; color:rgb(98, 151, 208)"> Model </span> → Controller selects a <span style="font-weight:bold; color:rgb(152, 205, 137)"> View </span> → **User** sees rendered data

::: details
1. User fills Register form and clicks “Submit”
2. Request goes to the Controller
	- validates input (`unique email address, integer 10-digit phone number`)
	- updates the Model with New user record
3. `Model` updates database
4. `Controller` selects a View
5. `View` renders updated `Model` data
6. User sees the result
:::

## Spreadsheets vs RDBMS vs NoSQL

| Feature                        | **Spreadsheets (Excel / Google Sheets)**                                                                                                     | **RDBMS (SQL Databases)**                                                               | **NoSQL (MongoDB, CouchDB)**                                                             |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Lookup & Cross-Referencing** | Possible using formulas like `VLOOKUP`, `INDEX/MATCH`, but becomes **harder** as data grows or multiple files | Powerful **JOINs**; relationships are clearly defined using **foreign keys** | Cross-referencing **not as natural** as `JOIN`; data is often duplicated (for performance) |
| **Data Relationships**         | Not automatic relationships; users must manually ensure   | **Strongly enforced** relationships using constraints                                   | Relationships are usually handled **in application code**, not the database              |
| **Stored Procedures / Logic**  | Limited to basic formulas & scripts (VBA, Google Apps Script)    | **Rich support**: stored `PROCEDURE`, `TRIGGER`, `FUNCTION`                                | Usually **no stored procedures**; limited server-side scripting                          |
| **Business Logic Support**     | Not suitable for complex or reusable logic   | Ideal for business rules, validations, automation                                       | Logic mostly lives in the application layer                                              |
| **Atomic Operations**          | No true atomicity; partial updates can occur                                                                                                 | **Fully atomic (ACID transactions)**                                                    | Atomic at **document level only**   |
| **Failure Handling**           | Manual recovery needed   | Automatic rollback on failure    | Rollback across multiple documents is limited                                            |
| **Scalability**                | Poor for large datasets                                                                                                                      | Scales well vertically, moderately horizontally                                         | Designed for **horizontal scaling**                                                      |
| **Best Use Case**              | Small data, analysis, quick calculations                                                                                                     | Structured data, ERP, banking like *Paypal, Visa, Oracle*      | used alongside SQL for Big data, flexible schemas, high-traffic aspects of *Instagram, Netflix, Youtube, Twitter, Swiggy*   |

