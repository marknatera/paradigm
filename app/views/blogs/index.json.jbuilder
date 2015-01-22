json.array!(@blogs) do |blog|
  json.extract! blog, :id, :title, :picture, :body
  json.url blog_url(blog, format: :json)
end
