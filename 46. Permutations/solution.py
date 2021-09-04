class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        solution = []
        
        if len(nums) == 1:
            return [nums]
        else:
            for index , element in enumerate(nums):
                for rest  in self.permute(nums[0:index] + nums[index+1:]):
                    x = [element] + rest
                    solution.append(x)
        return solution
