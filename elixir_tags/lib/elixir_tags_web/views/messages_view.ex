defmodule ElixirTagsWeb.MessagesView do
  use ElixirTagsWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
