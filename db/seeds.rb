20.times do
  book = Book.new(
    title: Faker::Book.title,
    author: Faker::Book.author,
    created_at: Faker::Time.between(2.days.ago, Time.now),
    updated_at: Faker::Time.between(1.days.ago, Time.now)
  )
  if book.valid?
    book.save!
  end
end
