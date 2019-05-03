workspaces.each do |workspace|
    json.set! workspace.id do 
        json.partial! "api/workspaces/workspace.json.jbuilder", workspace: workspace 
    end
end