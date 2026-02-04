-- Enable RLS
alter table clients enable row level security;
alter table automations enable row level security;
alter table ai_logs enable row level security;

-- Client can only see own data
create policy "Clients read own data"
on clients for select
using (auth.uid() = id);

create policy "Automations by client"
on automations for select
using (client_id = auth.uid());

create policy "Logs by client"
on ai_logs for select
using (client_id = auth.uid());
