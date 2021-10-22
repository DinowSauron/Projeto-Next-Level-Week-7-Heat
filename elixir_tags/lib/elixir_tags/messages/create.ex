defmodule ElixirTags.Messages.Create do
  alias ElixirTags.{Message, Repo} # alias é uma abreviação!

  def call(params) do
    params
    |> Message.changeset()
    |> Repo.insert()
    |> handle_insert()
  end


  defp handle_insert({:ok, %Message{}} = result), do: result
  defp handle_insert({:error, result}), do: {:error, %{result: result, status: :bad_request}}

end
