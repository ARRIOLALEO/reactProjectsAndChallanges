class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        solution = [0] * len(nums)
        solution.append(0)
        
        for index in nums:
            solution[index] +=1
            
        return solution.index(0)
    
