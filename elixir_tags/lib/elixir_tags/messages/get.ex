defmodule ElixirTags.Messages.Get do
  alias ElixirTags.{Message, Repo} # alias é uma abreviação!
  import Ecto.Query

  def today_messages do

    today = Date.utc_today()
    query = from message in Message, where: type(message.inserted_at, :date) == ^today

    Repo.all(query)

  end


end
