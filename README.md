# Reservoir AI

### AI-Powered Reservoir Engineering Intelligence Platform

Reservoir AI is an engineering software platform being developed to augment reservoir engineering workflows through automation, diagnostics, forecasting, uncertainty-aware analytics, and AI-assisted decision support.

The platform combines reservoir simulation, engineering domain models, machine learning, and modern software architecture to help engineers move faster from data to actionable recommendations.

---

## Vision

Reservoir engineers spend significant time:

- Validating simulation models
- Reviewing well performance
- Interpreting operating changes
- Comparing development scenarios
- Assessing uncertainty
- Generating technical reports

Reservoir AI aims to automate repetitive engineering workflows while maintaining transparency, traceability, and engineering rigor.

---

## Current Development

### Reservoir Model Validation

Automated identification of:

- Missing completions
- Invalid controls
- Timeline inconsistencies
- Well configuration issues
- Data integrity problems

### Well Inventory Analysis

Generation of structured inventories including:

- Producers
- Injectors
- SAGD pairs
- Operating status
- Completion history
- Control history

### Timeline Intelligence

Automated reconstruction of field history:

- Well events
- Operating changes
- Control modifications
- Production milestones

### Operating Strategy Analysis

Assessment of:

- Steam allocation
- Injection strategies
- Producer-injector relationships
- Operational performance indicators

---

## Current Architecture

```text
Parser Layer
      ↓
Domain Models
      ↓
Analysis Services
      ↓
Validation Services
      ↓
Serializers
      ↓
API Layer
      ↓
User Interface
```

### Core Domain Objects

- ReservoirModel
- Well
- Completion
- WellControl
- SAGDPair
- WellTimelineEvent

### Analysis Components

- Validation Engine
- Well Inventory Service
- Timeline Builder
- Operating Strategy Analysis
- Reservoir Diagnostics

---

## Technology Stack

- Python
- FastAPI
- GitHub
- Domain-Driven Design
- Reservoir Simulation
- Machine Learning
- Artificial Intelligence

---

## Future Capabilities

### Reservoir Engineering Copilot

Examples:

> Which SAGD pair experienced the largest steam efficiency decline?

> Identify wells with inconsistent controls.

> Summarize major operating changes between 2020 and 2025.

### Forecasting & Optimization

- Production forecasting
- Uncertainty analysis
- Scenario comparison
- Optimization workflows

### Knowledge Intelligence

- Engineering document retrieval
- Reservoir study summarization
- Automated reporting

---

## About

Reservoir AI is an independent software initiative led by Jose L. Guevara, PhD Petroleum Engineering (University of Alberta).

Research interests include:

- Reservoir Simulation
- SAGD Optimization
- Reinforcement Learning
- Production Forecasting
- Applied Artificial Intelligence
- Engineering Software Development
