function sortItems(
    n: number,
    m: number,
    group: number[],
    beforeItems: number[][]
): number[] {
    type Group = {
        neighbors: number[];
        itemsAdjList: Map<number, number[]>;
        itemsInDegree: Map<number, number>;
    };

    const itemsToGroup: Map<number, number> = new Map();
    const groups: Map<number, Group> = new Map();
    const groupsInDegree: Map<number, number> = new Map();
    const orderPath: number[] = [];

    initializeGroups();
    initializeGroupItemsRelations();
    performTopologicalSort();

    function initializeGroups(): void {
        let groupId = 1e6;

        for (let item = 0; item < n; item++) {
            let groupID;

            if (group[item] === -1) {
                groupID = groupId;
                groupId--;
            } else {
                groupID = group[item];
            }

            if (!groups.has(groupID)) {
                groups.set(groupID, {
                    neighbors: [],
                    itemsAdjList: new Map(),
                    itemsInDegree: new Map(),
                });
            }

            groups.get(groupID)!.itemsAdjList.set(item, []);
            groups.get(groupID)!.itemsInDegree.set(item, 0);
            itemsToGroup.set(item, groupID);

            groupsInDegree.set(groupID, 0);
        }
    }

    function initializeGroupItemsRelations(): void {
        for (let itemI = 0; itemI < n; itemI++) {
            const itemIGroupID = itemsToGroup.get(itemI) as number;

            for (const itemJ of beforeItems[itemI]) {
                const itemJGroupID = itemsToGroup.get(itemJ) as number;
                const itemIGroupInDegree = groupsInDegree.get(
                    itemIGroupID
                ) as number;
                const itemJGroup = groups.get(itemJGroupID) as Group;

                if (itemIGroupID === itemJGroupID) {
                    const groupJItemsAdjList = itemJGroup.itemsAdjList;
                    const groupJItemsInDegree = itemJGroup.itemsInDegree;

                    const itemJNeighbors = groupJItemsAdjList.get(
                        itemJ
                    ) as number[];
                    const itemIInDegree = groupJItemsInDegree.get(
                        itemI
                    ) as number;

                    itemJNeighbors.push(itemI);
                    groupJItemsInDegree.set(itemI, itemIInDegree + 1);
                } else {
                    groupsInDegree.set(itemIGroupID, itemIGroupInDegree + 1);
                    itemJGroup.neighbors.push(itemIGroupID);
                }
            }
        }
    }

    function performTopologicalSort(): void {
        const groupsQueue: Group[] = [];

        for (const groupID of groups.keys()) {
            if (groupsInDegree.get(groupID) === 0) {
                groupsQueue.push(groups.get(groupID) as Group);
            }
        }

        while (groupsQueue.length) {
            let groupsQueueSize = groupsQueue.length;

            while (groupsQueueSize--) {
                const currGroup = groupsQueue.shift() as Group;
                const currGroupItemsInDegree = currGroup.itemsInDegree;
                const currGroupItemsAdjList = currGroup.itemsAdjList;
                const currGroupItemsQueue: number[] = [];

                for (const item of currGroupItemsAdjList.keys()) {
                    if (currGroupItemsInDegree.get(item) === 0) {
                        currGroupItemsQueue.push(item);
                    }
                }

                while (currGroupItemsQueue.length) {
                    let currGroupItemsQueueSize = currGroupItemsQueue.length;

                    while (currGroupItemsQueueSize--) {
                        const currGroupItem =
                            currGroupItemsQueue.shift() as number;
                        const currItemNeighbors = currGroupItemsAdjList.get(
                            currGroupItem
                        ) as number[];

                        orderPath.push(currGroupItem);

                        for (const neighborItem of currItemNeighbors) {
                            let neighborItemInDegree =
                                currGroupItemsInDegree.get(
                                    neighborItem
                                ) as number;
                            neighborItemInDegree--;

                            if (neighborItemInDegree === 0) {
                                currGroupItemsQueue.push(neighborItem);
                            }

                            currGroupItemsInDegree.set(
                                neighborItem,
                                neighborItemInDegree
                            );
                        }
                    }
                }

                for (const neighborGroupID of currGroup.neighbors) {
                    let neighborGroupInDegree = groupsInDegree.get(
                        neighborGroupID
                    ) as number;
                    neighborGroupInDegree--;

                    if (neighborGroupInDegree === 0) {
                        groupsQueue.push(groups.get(neighborGroupID) as Group);
                    }

                    groupsInDegree.set(neighborGroupID, neighborGroupInDegree);
                }
            }
        }
    }

    return orderPath.length === n ? orderPath : [];
}
