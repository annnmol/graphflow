-- ============================================================
-- Users
-- ============================================================

INSERT INTO users (
  name,
  email
)
VALUES
  (
    'Anmol Tanwar',
    'anmol@example.com'
  ),
  (
    'Rahul Sharma',
    'rahul@example.com'
  ),
  (
    'Priya Singh',
    'priya@example.com'
  );


-- ============================================================
-- Projects
-- ============================================================

INSERT INTO projects (
  name,
  description,
  user_id
)
VALUES
  (
    'QueryForge',
    'A full-stack application for learning GraphQL with React, Express, and PostgreSQL.',
    1
  ),
  (
    'Task Manager',
    'A simple project and task management application.',
    1
  ),
  (
    'Portfolio Website',
    'A personal developer portfolio built with modern web technologies.',
    2
  ),
  (
    'E-Commerce Platform',
    'An online shopping platform with products, carts, and orders.',
    3
  );


-- ============================================================
-- Tasks
-- ============================================================

INSERT INTO tasks (
  title,
  status,
  project_id
)
VALUES
  -- QueryForge tasks
  (
    'Set up PostgreSQL database',
    'DONE',
    1
  ),
  (
    'Create GraphQL schema',
    'IN_PROGRESS',
    1
  ),
  (
    'Implement GraphQL resolvers',
    'TODO',
    1
  ),
  (
    'Connect React frontend',
    'TODO',
    1
  ),

  -- Task Manager tasks
  (
    'Design database schema',
    'DONE',
    2
  ),
  (
    'Create task API',
    'IN_PROGRESS',
    2
  ),
  (
    'Build task dashboard',
    'TODO',
    2
  ),

  -- Portfolio Website tasks
  (
    'Create homepage',
    'DONE',
    3
  ),
  (
    'Add projects section',
    'IN_PROGRESS',
    3
  ),
  (
    'Deploy portfolio',
    'TODO',
    3
  ),

  -- E-Commerce Platform tasks
  (
    'Design product schema',
    'DONE',
    4
  ),
  (
    'Build product listing',
    'IN_PROGRESS',
    4
  ),
  (
    'Implement shopping cart',
    'TODO',
    4
  );
