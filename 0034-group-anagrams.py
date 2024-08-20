from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = {}
        for str in strs:
            sortedStr = "".join(sorted(str))
            if sortedStr in hashmap:
                hashmap[sortedStr].append(str)
            else:
                hashmap[sortedStr] = [str]

        return hashmap.values()
