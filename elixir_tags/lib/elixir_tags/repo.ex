defmodule ElixirTags.Repo do
  use Ecto.Repo,
    otp_app: :elixir_tags,
    adapter: Ecto.Adapters.Postgres
end
