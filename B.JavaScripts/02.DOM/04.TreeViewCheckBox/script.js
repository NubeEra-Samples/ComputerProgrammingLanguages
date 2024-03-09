document.addEventListener('DOMContentLoaded', function () {
    const treeviewContainer = document.getElementById('treeview-container');

    // Sample JSON data
    const jsonData = {
        "name": "Root",
        "children": [
            {
                "name": "Node 1",
                "children": [
                    {
                        "name": "Node 1.1"
                    },
                    {
                        "name": "Node 1.2"
                    }
                ]
            },
            {
                "name": "Node 2"
            },
            {
                "name": "Node 3",
                "children": [
                    {
                        "name": "Node 3.1"
                    },
                    {
                        "name": "Node 3.2"
                    }
                ]
            }
        ]
    };

    // Render the TreeView
    renderTreeview(jsonData, treeviewContainer);
});

function renderTreeview(node, container) {
    const treeNode = document.createElement('div');
    treeNode.classList.add('tree-node');

    const toggleIcon = document.createElement('span');
    toggleIcon.classList.add('toggle-icon');
    toggleIcon.addEventListener('click', function () {
        toggleNode(treeNode);
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        handleCheckboxChange(checkbox, node);
    });

    const label = document.createElement('label');
    label.textContent = node.name;

    treeNode.appendChild(toggleIcon);
    treeNode.appendChild(checkbox);
    treeNode.appendChild(label);

    if (node.children) {
        const childContainer = document.createElement('ul');
        node.children.forEach(child => {
            renderTreeview(child, childContainer);
        });
        treeNode.appendChild(childContainer);
    }

    container.appendChild(treeNode);
}

function toggleNode(node) {
    node.classList.toggle('collapsed');
    node.classList.toggle('expanded');
}

function handleCheckboxChange(checkbox, node) {
    console.log(`Checkbox state changed for ${node.name}: ${checkbox.checked}`);
    // Add your custom logic here
}
