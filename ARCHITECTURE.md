# Reservoir AI Architecture

## Design Philosophy

Reservoir AI follows a domain-driven architecture where reservoir engineering concepts are represented as explicit domain objects and analysis services.

The objective is to separate engineering logic from user interfaces, storage systems, and external integrations.

## High-Level Architecture

```text
                Reservoir Models
                       │
                       ▼
                  Parser Layer
                       │
                       ▼
                 Domain Models
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
 Validation      Diagnostics      Analytics
  Services         Services        Services
       │               │               │
       └───────────────┼───────────────┘
                       ▼
                  Serializers
                       ▼
                    API Layer
                       ▼
              Future User Interface
```

## Core Domain Objects

### ReservoirModel

Represents the complete reservoir model and provides access to wells, controls, completions, and relationships.

### Well

Represents an individual producer or injector.

### Completion

Stores completion interval information and completion history.

### WellControl

Represents operational controls such as steam injection or production constraints.

### SAGDPair

Represents producer-injector relationships.

### WellTimelineEvent

Represents chronological operational events.

## Analysis Services

### Validation Engine

Performs quality-control checks on reservoir models.

Examples:

- Missing completions
- Invalid controls
- Timeline inconsistencies
- Missing relationships

### Well Inventory Service

Generates structured summaries of reservoir assets.

### Timeline Builder

Reconstructs operating history and well evolution.

### Operating Strategy Analysis

Analyzes operational changes and control histories.

## Future Architecture Extensions

- Forecasting Services
- Reservoir Health Scoring
- Uncertainty Analysis
- Engineering Copilot
- Knowledge Retrieval
- Automated Reporting
