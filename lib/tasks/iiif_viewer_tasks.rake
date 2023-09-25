# desc "Explaining what the task does"
namespace :iiif_viewer do
    task :cpfiles do
        # Task goes here
    
        #Copy CSS 
        #source_file = File.join(IiifViewer::Engine.root, 'app/assets/stylesheets/iiif_viewer', "uv.min.css")
        #dest_file = File.join(Rails.root, 'app/assets/stylesheets', "uv.min.css")
        #FileUtils.copy_file source_file, dest_file, true

        #Copy JS
        #source_file = File.join(IiifViewer::Engine.root, 'app/javascript', "UV.min.js")
        #dest_file = File.join(Rails.root, 'app/javascript', "UV.min.js")
        #FileUtils.copy_file source_file, dest_file, true

        source_file = File.join(IiifViewer::Engine.root, 'app/javascript/controllers', "iiif_viewer_component_controller.js")
        dest_file = File.join(Rails.root, 'app/javascript/controllers', "iiif_viewer_component_controller.js")
        FileUtils.copy_file source_file, dest_file, true

        if File.readlines(File.join(Rails.root, 'app/javascript/controllers', "index.js")).grep(/import IIIFViewerController/).any?
            puts "Skipping index append..."
        else
            open(File.join(Rails.root, 'app/javascript/controllers', "index.js"), 'a') { |f|
                f << "import IIIFViewerController from './iiif_viewer_component_controller'\n"
                f << "application.register('iiif_viewer', IIIFViewerController)\n"
            }
        end

        #open(File.join(Rails.root, 'config', 'importmap.rb'), 'a') { |f|
        #    f << "\npin \"app/javascript/UV.min.js\""
        #}
    end
end