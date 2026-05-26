#!/usr/bin/env python3
"""
Module for running multiple coroutines concurrently.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay.
    Returns the list of all the delays in ascending order.
    """
    # Create a list of task objects
    tasks = [wait_random(max_delay) for _ in range(n)]
    
    # Gather them to run concurrently and wait for all to complete
    delays = await asyncio.gather(*tasks)
    
    # Returning the result of gather, which is already a list
    return list(delays)
