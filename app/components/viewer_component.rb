require 'view_component/version'
class ViewerComponent < ViewComponent::Base
    def initialize(documentId:, prefix:)
        @documentId = documentId
        @prefix = prefix
        puts @documentId
        puts @prefix
    end
end