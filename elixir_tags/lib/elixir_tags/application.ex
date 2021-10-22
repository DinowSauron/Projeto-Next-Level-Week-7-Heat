defmodule ElixirTags.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      ElixirTags.Repo,
      # Start the Telemetry supervisor
      ElixirTagsWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: ElixirTags.PubSub},
      # Start the Endpoint (http/https)
      ElixirTagsWeb.Endpoint,
      # Start a worker by calling: ElixirTags.Worker.start_link(arg)
      # {ElixirTags.Worker, arg}
      ElixirTags.Scheduler
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ElixirTags.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ElixirTagsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
