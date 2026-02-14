create schema if not exists s_insurance;
set search_path to s_insurance;
-- филиал
create table if not exists t_branch (
    branch_id integer generated always as identity primary key,
    name text not null,
    address text not null,
    phone_number text not null
);
-- клиент
create table if not exists t_client (
    client_id integer generated always as identity primary key,
    first_name text not null,
    last_name text not null,
    middle_name text,
    email text,
    phone_number text not null
);
-- вид страхования
create table if not exists t_insurance_type (
    type_id integer generated always as identity primary key,
    type_name text not null unique,
    agent_percent numeric(5, 2) not null check (agent_percent >= 0)
);
-- агент
create table if not exists t_agent (
    agent_id integer generated always as identity primary key,
    branch_id integer not null references t_branch(branch_id) on update cascade on delete restrict,
    first_name text not null,
    last_name text not null,
    middle_name text,
    email text,
    phone_number text not null
);
-- договор
create table if not exists t_contract (
    contract_id integer generated always as identity primary key,
    branch_id integer not null references t_branch(branch_id) on update cascade on delete restrict,
    client_id integer not null references t_client(client_id) on update cascade on delete restrict,
    agent_id integer not null references t_agent(agent_id) on update cascade on delete restrict,
    type_id integer not null references t_insurance_type(type_id) on update cascade on delete restrict,
    conclusion_date date not null default current_date,
    insurance_amount numeric(14, 2) not null check (insurance_amount > 0),
    tariff_rate numeric(8, 6) not null check (tariff_rate > 0)
);