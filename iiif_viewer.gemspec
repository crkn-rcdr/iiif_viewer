require_relative "lib/iiif_viewer/version"

Gem::Specification.new do |spec|
  spec.name        = "iiif_viewer"
  spec.version     = IiifViewer::VERSION
  spec.authors     = ["Brittny Lapierre"]
  spec.email       = ["brittny.lapierre@gmail.com"]
  spec.homepage    = "https://github.com"
  spec.summary     = "Summary of IiifViewer."
  spec.description = "Description of IiifViewer."
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the "allowed_push_host"
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com"
  spec.metadata["changelog_uri"] = "https://github.com"

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  end

  spec.add_dependency "rails", ">= 7.0.8"
end
