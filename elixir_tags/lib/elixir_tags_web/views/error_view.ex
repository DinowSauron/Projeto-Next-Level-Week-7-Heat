defmodule ElixirTagsWeb.ErrorView do
  use ElixirTagsWeb, :view
  alias Ecto.Changeset
  import Ecto.Changeset, only: [traverse_errors: 2]
  def template_not_found(template, _assigns) do
    %{errors: %{detail: Phoenix.Controller.status_message_from_template(template)}}
  end

  def render("error.json", %{result: %Changeset{} = changeset}) do
    IO.inspect(changeset)
    %{result: translate_errors(changeset)}
  end

  defp translate_errors(changeset) do
    traverse_errors(changeset, fn {msg, opts} ->
      Enum.reduce(opts, msg, fn {key, value}, acc ->
        String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
  end
end
